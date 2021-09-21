import { useState } from "react";

import { TextInput, DropdownInput} from '../../Inputs/Inputs'

const CreateJob = () => {
    const [info, setInfo] = useState('');
    const [type, setType] = useState('Ilgtermiņa');
    const [price, setPrice] = useState(0);
    const [requirements, setRequirements] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log({
            info,
            type,
            price,
            requirements,
            post_time: Date.now()
        });
    }

    return (
        <form className="auth-home__middle__create-job panel" onSubmit={(e) => submitForm(e)}>
            <h2 className="auth-home__middle__create-job__title">
                Izvēidot jaunu darba piedāvājumu
            </h2>
            <DropdownInput
                title="Darba tips"
                value={type}
                setValue={setType}
                options={[
                    "Ilgtermiņa",
                    "īstermiņa",
                    "Brīvprātīgs"
                ]}
            />
            <TextInput
                title="Prasmes"
                inputName="requirements"
                value={requirements}
                setValue={setRequirements}
                placeholder="piem. 3 gadu pieredze jomā"
                required={false}
            />
            <TextInput
                title="Darba Apraksts"
                inputName="info"
                value={info}
                setValue={setInfo}
                placeholder="apraksts"
            />
            <TextInput
                title="Ikmēneša alga"
                inputName="price_range"
                value={price}
                setValue={setPrice}
                inputType="number"
            />
            <div className="align-right">
                <button type="submit">Izveidot</button>
            </div>
        </form>
    )
}

export default CreateJob;
