import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "nb", label: "Norsk", flag: "🇳🇴" },
];

export const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setCurrentPath(path);
      setCurrentLang(path.startsWith("/nb") ? "nb" : "en");
    }
  }, []);

  const switchLanguage = (langCode: string) => {
    if (langCode === currentLang || typeof window === "undefined") return;

    let newPath: string;
    
    if (langCode === "nb") {
      // Switch to Norwegian
      if (currentPath === "/" || currentPath === "") {
        newPath = "/nb";
      } else if (currentPath.startsWith("/post/")) {
        newPath = currentPath.replace("/post/", "/nb/post/");
      } else {
        newPath = `/nb${currentPath}`;
      }
    } else {
      // Switch to English
      if (currentPath === "/nb" || currentPath === "/nb/") {
        newPath = "/";
      } else if (currentPath.startsWith("/nb/")) {
        newPath = currentPath.replace("/nb/", "/");
      } else {
        newPath = currentPath;
      }
    }

    window.location.href = newPath;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-2">
            <Languages className="size-4" />
            <span className="hidden sm:inline">
              {languages.find((lang) => lang.code === currentLang)?.label}
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-popover text-popover-foreground">
            <div className="w-48 p-2">
              {languages.map((lang) => (
                <NavigationMenuLink asChild key={lang.code}>
                  <button
                    onClick={() => switchLanguage(lang.code)}
                    className={`hover:bg-muted hover:text-accent-foreground flex w-full items-center gap-3 rounded-md p-3 text-left transition-colors ${
                      currentLang === lang.code ? "bg-muted" : ""
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.label}</span>
                  </button>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const LanguageSwitcherMobile = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setCurrentPath(path);
      setCurrentLang(path.startsWith("/nb") ? "nb" : "en");
    }
  }, []);

  const switchLanguage = (langCode: string) => {
    if (langCode === currentLang || typeof window === "undefined") return;

    let newPath: string;
    
    if (langCode === "nb") {
      // Switch to Norwegian
      if (currentPath === "/" || currentPath === "") {
        newPath = "/nb";
      } else if (currentPath.startsWith("/post/")) {
        newPath = currentPath.replace("/post/", "/nb/post/");
      } else {
        newPath = `/nb${currentPath}`;
      }
    } else {
      // Switch to English
      if (currentPath === "/nb" || currentPath === "/nb/") {
        newPath = "/";
      } else if (currentPath.startsWith("/nb/")) {
        newPath = currentPath.replace("/nb/", "/");
      } else {
        newPath = currentPath;
      }
    }

    window.location.href = newPath;
  };

  return (
    <div className="flex flex-col gap-2 border rounded-lg p-3">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
        <Languages className="size-4" />
        Language
      </div>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={currentLang === lang.code ? "default" : "outline"}
          className="w-full justify-start gap-3"
          onClick={() => switchLanguage(lang.code)}
        >
          <span className="text-xl">{lang.flag}</span>
          <span>{lang.label}</span>
        </Button>
      ))}
    </div>
  );
};
