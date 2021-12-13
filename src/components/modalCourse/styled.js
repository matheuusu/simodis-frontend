import styled from 'styled-components'

export const ModalCourse = styled.div`
  .course-modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 11;

    .course-question {
      background: var(--white);

      .button-actions {
        padding: 0 4rem;
        margin-top: 2rem;
        display: flex;
        gap: 6rem;
      }

      form {
        padding: 1rem;

        h2 {
          margin-right: 20rem;
        }
      }

      form h2 {
        color: var(--grey-dark);
        margin-bottom: 1rem;
      }

      form .input-group {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`
