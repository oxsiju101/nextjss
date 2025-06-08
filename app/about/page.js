import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">About Me</h1>
      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="mt-4">
        Hi! I’m a full-stack developer passionate about building with Next.js.
      </p>
    </div>
  );
}
