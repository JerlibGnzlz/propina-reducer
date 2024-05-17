import { OderActions } from "../reducers/orderResucer"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPorcentajeProps = {
    dispatch: React.Dispatch<OderActions>
    tip: number
}


export const TipPorcentaje = ({ tip, dispatch }: TipPorcentajeProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map(tipOtion => (
                    <div
                        key={tipOtion.id}
                        className="flex gap-1">
                        <label htmlFor={tipOtion.id}>{tipOtion.label}</label>
                        <input
                            id={tipOtion.id}
                            type="radio"
                            name="tip"
                            value={tipOtion.value}
                            onChange={(e) => dispatch({ type: "addTip", payload: { value: +e.target.value } })}
                            checked={tipOtion.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
