import { IStack } from '../types'
import { ArrayStack } from './ArrayStack'
import { LinkedListStack } from './LinkedListStack'

const runTest = (testName: string, getNewStack: () => IStack<number>) => {
  describe(testName, () => {
    let stack: IStack<number>

    beforeEach(() => {
      stack = getNewStack()
    })

    describe('#push', () => {
      it('should add an item to the top of the stack', () => {
        stack.push(10)
        stack.push(7)

        expect(stack.getTop()).toBe(7)
        expect(stack.size()).toBe(2)
      })
    })

    describe('#pop', () => {
      describe('when items are available', () => {
        beforeEach(() => {
          stack.push(10).push(12)
        })

        it('should return the top item in the stack and remove item', () => {
          const result = stack.pop()

          expect(result).toBe(12)
          expect(stack.size()).toBe(1)
        })
      })

      describe('when items are not available', () => {
        it('should throw an exception', () => {
          expect(stack.pop()).toBeNull()
        })
      })
    })
  })
}

describe('Stack', () => {
  runTest('ArrayStack', () => new ArrayStack())
  runTest('LinkedListStack', () => new LinkedListStack())
})
