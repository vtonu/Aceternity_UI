import Image from 'next/image';
import { TracingBeam } from './tracing-beam';
import { DotBackgroundDemo } from './dottedBackground';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DotBackgroundDemo />
    </main>
  );
}
