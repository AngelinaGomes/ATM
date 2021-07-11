/* eslint-disable no-var */
export class ATM {
  public static solutions (bills: number[], amounts: number[], variation: number[], amount: number, position: number): number[][] {
    const list: number[][] = []
    const value: number = ATM.compute(bills, variation)
    if (value < amount) {
      for (let i = position; i < bills.length; i++) {
        const newVariation: number[] = [...variation]
        newVariation[i]++
        const newList = ATM.solutions(bills, amounts, newVariation, amount, i)
        if (newList != null) {
          list.push(...newList)
        }
      }
    } else if (value === amount) {
      list.push(ATM.myCopy(variation))
    }
    return list
  }

  public static compute (bills: number[], variation: number[]): number {
    var ret = 0
    for (let i = 0; i < variation.length; i++) {
      ret += bills[i] * variation[i]
    }
    return ret
  }

  public static myCopy (ar: number[]): number[] {
    var ret: number[] = new Array(ar.length)
    for (let i = 0; i < ar.length; i++) {
      ret[i] = ar[i]
    }
    return ret
  }
}
