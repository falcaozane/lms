import { Button } from "@/components/ui/button";
import { CirclePlus } from 'lucide-react';
import Link from "next/link";

const CoursesPage = () => {
    return ( 
        <div className="p-6">
            <Link href="/teacher/create">
                <Button className="bg-amber-500 hover:bg-orange-500">New Course <CirclePlus className="ml-3" /> </Button>
            </Link>
        </div>
     );
}
 
export default CoursesPage;