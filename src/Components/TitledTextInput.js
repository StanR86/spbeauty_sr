import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: F8FAFC;
    color: 0F172A;
    &:hover {
        background-color: F8FAFC;
        color: #94A3B8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='caption'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-1'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>

        </div>
    );
}

export default TitledTextInput;