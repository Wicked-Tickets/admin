import AppShell from "@/components/app-shell";
import Actions from "@/components/actions";
export default function AppPage() {
  return (
    <AppShell>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="py-10 text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {
              "Welcome to the Wicked Tickets Deployer (TODO: Add useful links + content below)"
            }
          </h1>
        </div>
      </header>
      <Actions></Actions>
    </AppShell>
  );
}
