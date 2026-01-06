
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"

export function CardSkeleton() {
    return (
        <Card className="rounded-3xl border-none shadow-sm overflow-hidden">
            <div className="h-44 bg-slate-100 dark:bg-slate-800 relative">
                <Skeleton className="w-full h-full" />
            </div>
            <CardHeader className="pb-3 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-8 w-1/2" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-8 w-24 rounded-xl" />
            </CardContent>
            <CardFooter className="gap-3 pt-2 pb-6 px-6">
                <Skeleton className="h-9 flex-1 rounded-xl" />
                <Skeleton className="h-9 w-9 rounded-xl" />
            </CardFooter>
        </Card>
    )
}
