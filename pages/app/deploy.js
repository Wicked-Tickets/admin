import AppShell from "@/components/app-shell";
import Steps from "@/components/steps";
import DeployActions from "@/components/deploy-actions";

export default function Deploy() {
  return (
    <AppShell>
      {/* 3 column wrapper */}
      <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
            <Steps></Steps>
          </div>

          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <DeployActions></DeployActions>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
