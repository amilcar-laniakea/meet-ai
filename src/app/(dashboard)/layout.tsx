import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardFooter } from '@/modules/dashboard/ui/components/dashboard-footer';
import { DashboardNavbar } from '@/modules/dashboard/ui/components/dashboard-navbar';
import { DashboardSidebar } from '@/modules/dashboard/ui/components/dashboard-sidebar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col min-h-screen w-screen bg-muted justify-between">
        <DashboardNavbar />
        {children}
        <DashboardFooter />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
