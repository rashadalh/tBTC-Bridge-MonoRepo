/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kZAnBwc6PJn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../../components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogContent, Dialog } from "../../components/ui/dialog"

export default function Component() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px]">
        <DialogHeader>
          <DialogTitle>Congratulations!</DialogTitle>
        </DialogHeader>
        <div className="p-4 grid gap-4 text-sm">
          <p className="font-semibold">You have successfully bridged your tokens.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

