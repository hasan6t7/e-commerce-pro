import ThemeToggle from "./components/common/ThemeToggle";
import { Button } from "./components/ui/button";

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground transition-colors">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-primary">
              PRODUCTION E-COMMERCE
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Theme System
            </h1>

            <p className="mt-3 text-foreground-secondary">
              Fully customizable light and dark theme.
            </p>
          </div>

          <ThemeToggle />
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Product Card */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-xl font-semibold">
              Product Card
            </h2>

            <p className="mt-2 text-foreground-secondary">
              This surface automatically changes with the theme.
            </p>

            <Button className="mt-5">
              Add to Cart
            </Button>
          </div>

          {/* Semantic Colors */}
          <div className="rounded-2xl border border-border bg-surface-secondary p-6">
            <h2 className="text-xl font-semibold">
              Semantic Colors
            </h2>

            <div className="mt-4 space-y-2">
              <p className="text-success">
                Success
              </p>

              <p className="text-warning">
                Warning
              </p>

              <p className="text-danger">
                Danger
              </p>

              <p className="text-info">
                Information
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;