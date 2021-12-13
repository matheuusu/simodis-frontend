import styled from 'styled-components'

export const ProfileModal = styled.div`
  .profile-modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 12;

    #profile-infor {
      width: 70%;
    }

    .profile-group {
      background: var(--white);
      padding: 1rem 2rem;
    }
  }
`
