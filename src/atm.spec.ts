import { ATM } from './atm'

describe('ATM', () => {
  it('should return correct configuration for a given withdrawal ammount', () => {
    const bills = [100, 50, 20, 10]
    const billAmounts = [10, 10, 10, 10]
    const initialVariation = new Array(4).fill(0)
    const withdrawalAmount = 300
    const result = ATM.solutions(bills, billAmounts, initialVariation, withdrawalAmount, 0)
    expect(result.some(function (element) {
      return element === [2, 2, 0, 0]
    }))
    expect(result.some(function (element) {
      return element === [1, 3, 2, 1]
    }))
  })

  it('should return two configurations: higher and lower bills', () => {
    const bills = [100, 50, 20, 10]
    const billAmounts = [10, 10, 10, 10]
    const atm = new ATM(bills, billAmounts)
    const configurations = atm.getConfigurations(300)
    const higherBills = summation(configurations.moreHigherBills)
    const lowerBills = summation(configurations.moreLowerBills)
    expect(higherBills).toBeLessThan(lowerBills)
  })

  function summation (array: number[]): number {
    return array.reduce((a: number, b: number) => a + b, 0)
  }
})
