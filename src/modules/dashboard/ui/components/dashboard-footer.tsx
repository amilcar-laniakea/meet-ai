import Link from 'next/link';

const currentYear = () => new Date().getFullYear();

export const DashboardFooter = () => {
  return (
    <footer className="flex px-2 gap-x-2 items-center py-1.5 border-t bg-background justify-center fixed w-fill-available z-10 bottom-0">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs">
          Developed by{' '}
          <Link
            className="underline underline-offset-2 text-blue-800"
            href="https://portfolio.aml-code.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amilcar Barahona
          </Link>
        </p>
        <p className="text-[0.6rem] text-muted-foreground">
          ©{currentYear()} Meet AI.
        </p>
      </div>
    </footer>
  );
};
