import { Blocks } from 'react-loader-spinner';
import { Container } from '..';



export const Spinner = () => {

  return (
    <Container className='spinnerContainer'>
      <Blocks
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{ position: "fixed", left: "50%", transform: "translateX(-50%)" }}
        wrapperClass="blocks-wrapper"

      />
    </Container>
  )
};
