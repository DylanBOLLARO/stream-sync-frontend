import { Menu, Star } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const SiteHeader = () => {
	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 select-none ">
			<h1 className="absolute text-2xl tracking-tight lg:text-3xl left-1/2 -translate-x-1/2">
				Stream{" "}
				<span className="font-extrabold text-lime-500">Sync</span>
			</h1>
			<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<Star className="h-6 w-6" />
				<Link
					href="/"
					className="text-muted-foreground transition-colors hover:text-foreground text-xl"
				>
					Accueil
				</Link>
				<Link
					href="/favoris"
					className="text-muted-foreground transition-colors hover:text-foreground text-xl"
				>
					Favoris
				</Link>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="shrink-0 md:hidden"
					>
						<Menu className="h-5 w-5" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<Link
							href="/"
							className="text-muted-foreground hover:text-foreground"
						>
							Accueil
						</Link>
						<Link
							href="/favoris"
							className="text-muted-foreground hover:text-foreground"
						>
							Favoris
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<ModeToggle />
			</div>
		</header>
	);
};
export default SiteHeader;
