import { useReducer } from "react";
import { MenuItems } from "./components/MenuItems";
import { OrderContents } from "./components/OrderContents";
import { OrderTotal } from "./components/OrderTotal";
import { TipPorcentaje } from './components/TipPorcentaje';
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/orderResucer";

function App() {


  const [state, dispatch] = useReducer(orderReducer, initialState)



  return (
    <>
      <header className="bg-slate-800 py-4">
        <h1 className="text-center text-yellow-50 font-bold text-2xl uppercase">
          Calculadora de propina y consumo
        </h1>
      </header>

      <main className="max-w-6xl mx-auto py-20 grid sm:grid-cols-2">
        <div className="">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 ml-5 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />

              <TipPorcentaje
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center font-bold uppercase">La Orden esta vacia</p>

          )}
        </div>
      </main>
    </>
  );
}

export default App;
