import './validationError.styles.css';

interface Props {
    errors: any;
  }
  
  const ValidationError = ({ errors }: Props) => {

    console.log(errors)
    return (
      <div className="validation-error">
        <div className="validation-error__card">
          {errors && (
            <ul className="validation-error__list">
              {errors.map((err: string, i: any) => (
                <li key={i} className="validation-error__item">
                  {err}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
  
  export default ValidationError