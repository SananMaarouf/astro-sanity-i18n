import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeSwitcher, ThemeSwitcherMobile } from "./theme-switcher";
import { LanguageSwitcher, LanguageSwitcherMobile } from "./language-switcher";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  linkBtn?: {
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/astro.svg",
    alt: "logo",
    title: "Acme Corp",
  },
  menu = [
    {
      title: "Dropdown menu",
      url: "#",
      items: [
        {
          title: "Link 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Link 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Link 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Link 4",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
  ],
  linkBtn = {
    signup: { title: "Posts", url: "/posts" },
  },
}: NavbarProps) => {
  return (
    <section className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b pt-4 pb-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between gap-3 lg:flex">
          <div className="flex items-center w-full">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter whitespace-nowrap">
                {logo.title}
              </span>
            </a>
            <div className="flex ml-auto items-center">
              <NavigationMenu className="[&_div.absolute]:-left-8 [&_div.absolute]:top-10">
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button asChild size="sm">
              <a href={linkBtn.signup.url}>{linkBtn.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter whitespace-nowrap">
                {logo.title}
              </span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon-lg">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full wrap-break-word flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a href={linkBtn.signup.url}>{linkBtn.signup.title}</a>
                    </Button>
                    <LanguageSwitcherMobile />
                    <ThemeSwitcherMobile />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex min-w-70 
      select-none flex-row gap-4 rounded-md p-3 leading-none 
      no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug wrap-break-word whitespace-normal">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
