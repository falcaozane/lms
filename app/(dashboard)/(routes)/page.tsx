import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
          <UserButton afterSignOutUrl="/" />
        {/* <Button variant="destructive">Click me</Button> */}
    </div>
  );
}
