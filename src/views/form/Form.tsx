import { FormProps } from "../../interface/FormProps";

function Form({ state, props }: any) {
    function generateInput(value: string) {
        return (
            <>
                <label key={value} htmlFor={value}>
                    {value}
                </label>
                <input type="text" name="{value}" id="{value}" />
            </>
        );
    }
    if (state)
        return (
            <div className="formulario">
                <form action="">
                    {props.map((prop: any) => generateInput(prop))}
                </form>
            </div>
        );
    else return null;
}

export default Form;
