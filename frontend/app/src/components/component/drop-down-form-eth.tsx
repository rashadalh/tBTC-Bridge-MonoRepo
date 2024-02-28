import { Button } from "../ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "../ui/dialog";

interface PopUpWindowProps {
  open: boolean;
  onClose: () => void; // Keep this to manage closing from inside PopUpWindow if needed
}

export const PopUpWindow: React.FC<PopUpWindowProps> = ({ open, onClose }) => (
  <Dialog open={open}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Congratulations!</DialogTitle>
      </DialogHeader>
      <div className="p-4 grid gap-4 text-sm">
        <p className="font-semibold">You have successfully bridged your tokens!</p>
        <p className="font-semibold">TX Hash: 0xb41b75372ab39273fe9d8433b3877f25 <b/> 96e333f85351431d0383aea3cf91b6e0 </p>
        <Button onClick={onClose}>Close</Button> {/* Use the onClose prop to close the dialog */}
      </div>
    </DialogContent>
  </Dialog>
);

export function DropDownFormEth() {
  const [amount, setAmount] = useState<number>(0);
  const [wallet, setWallet] = useState<string>("Ticker");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function mint(numbers: number, wallet: string) {
    console.log("Hooray! Wallet is:", wallet);
    console.log("Hooray! Number is:", numbers);
    setShowPopup(true);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">WBRC20 Bridge City</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form className="flex w-full max-w-sm flex-col gap-2" onSubmit={(e) => {
          e.preventDefault();
          mint(amount, wallet);
        }}>
          <div className="grid gap-1.5">
            <Label htmlFor="wallet">WBRC20</Label>
            <Input id="wallet" placeholder="Recipient" value={wallet} type="text" onChange={(e) => setWallet(e.target.value)} />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" value={amount} placeholder="0" type="number" onChange={(e) => setAmount(Number(e.target.value))}/>
          </div>
          <Button type="submit">Bridge It</Button>
        </form>
      </PopoverContent>
      {showPopup && <PopUpWindow open={showPopup} onClose={() => setShowPopup(false)} />}
    </Popover>
  );
}
