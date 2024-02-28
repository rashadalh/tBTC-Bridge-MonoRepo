/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/E9ZLXXKO9Xm
 */
import { CardHeader, CardContent, CardFooter, Card } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useState } from "react"

export function TransferForm() {
  function mint(numbers: number, wallet: string) {

    // const result = bob-sdk.coolMethod(numbers, text)
    console.log("Hooray! Wallet is:" + wallet)
    console.log("Hooray! Number is:" + numbers)
    return true
  }

  const [amount, setAmount] = useState<number>(0)
  const [wallet, setWallet] = useState<string>("Text here")

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center">
          <img alt="Logo" className="h-8 w-8 mr-2" src="/placeholder.svg" />
          <div>Transfer Funds</div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Enter the recipient and amount below.</p>
      </CardHeader>
      <CardContent className="flex items-start gap-4 pt-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div>
            <Label htmlFor="recipient">Recipient</Label>
            <Input id="wallet" placeholder="Recipient" value={wallet} type="string" onChange={(e) => setWallet(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount"  value={amount}  placeholder="0"  type="number" onChange={(e) => setAmount(Number(e.target.value))}/>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={() => mint(amount, wallet)}>Transfer</Button>
      </CardFooter>
    </Card>
  )
}
