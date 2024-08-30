import { PrimitiveSetAction, SetStateValueCallback, StateWithSetAction } from 'src/shared/zustand/type'
import { capitalize } from 'src/shared/utils/string'
import { AnyRecord } from 'src/types/common'

export type ZustandCommonState<InitialState extends AnyRecord> = ReturnType<
  typeof generateZustandValueFromInitialState<InitialState>
>

type SetFirstParam<State extends AnyRecord> = State | Partial<State> | SetStateValueCallback<State>

function stateWithSet<State extends AnyRecord>(
  state: State,
  set: (value: SetFirstParam<State>) => void,
): StateWithSetAction<State> {
  const action = Object.keys(state).reduce((acc, key: keyof State) => {
    return {
      ...acc,
      [`set${capitalize(key as string)}`]: (value: State[keyof State]) => {
        if (typeof value === 'function') {
          return set((prev: State) => {
            const prevValue = prev[key]
            const result = (value as SetStateValueCallback<State, unknown>)(prevValue)
            return { [key]: result } as Partial<State>
          })
        }
        set({ [key]: value } as Partial<State>)
      },
    }
  }, {} as PrimitiveSetAction<State>)

  return { ...action, ...state }
}
export function generateZustandValueFromInitialState<State extends AnyRecord = AnyRecord>(
  initialState: State,
  set: (value: SetFirstParam<State>) => void,
) {
  return {
    ...stateWithSet(initialState, set),
    reset: () => set(initialState),
  }
}
