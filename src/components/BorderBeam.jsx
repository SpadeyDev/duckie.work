import { BorderBeam } from "./magicui/border-beam";
import CodeEditor from "../assets/editor.svg";

export function BorderBeamDemo() {
  return (
    <div className="relative p-2 flex h-[685px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        <img src={CodeEditor} alt="codeEditor" />
      </span>
      <BorderBeam size={400} duration={9} delay={9} />
    </div>
  );
}
