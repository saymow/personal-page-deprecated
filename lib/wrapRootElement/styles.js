import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  > div > div {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
