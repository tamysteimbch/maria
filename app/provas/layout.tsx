import Sidebar from '../../components/sidebar';

export default function TestsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-stone-900 text-white">
      <aside className="w-1/4">
        <Sidebar />
      </aside>
      <main className="w-3/4">{children}</main>
    </div>
  );
}
