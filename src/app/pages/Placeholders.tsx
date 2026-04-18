export function Projects() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 min-h-screen">
      <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8">All Projects</h1>
      <p className="text-gray-400 font-light text-xl max-w-2xl">
        A comprehensive archive of all interactive installations, web platforms, and design systems I've developed.
      </p>
      {/* Could reuse Home's project list here, but keeping it minimal as requested */}
    </div>
  );
}

export function Around() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8 italic">Around the Web</h1>
      <p className="text-gray-400 font-light text-xl max-w-xl mx-auto">
        Writings, experimental fragments, and computational sketches. Coming soon.
      </p>
    </div>
  );
}
