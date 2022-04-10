import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { S1, S2 } from "../../components/Fonts";

const GuestContainer = styled.section`
  margin-bottom: 2rem;
`;

const GuestName = styled(S1)`
  margin-bottom: 1rem;
`;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const Answer = styled(S2)`
  /* color: ${(props) => props.theme.colors.foreground.secondary}; */
`;

function GuestDetails({ guest }) {
  return (
    <GuestContainer>
      <GuestName>
        {`${guest.fields.first_name} ${guest.fields.last_name}`}
      </GuestName>
      {guest?.fields?.is_invited_mendhi && (
        <AnswerContainer>
          <Answer>Is attending mendhi?</Answer>
          <Answer>{guest.fields.is_attending_mendhi ? "Yes" : "No"}</Answer>
        </AnswerContainer>
      )}
      <AnswerContainer>
        <Answer>Is attending nikkah?</Answer>
        <Answer>{guest.fields.is_attending_nikkah ? "Yes" : "No"}</Answer>
      </AnswerContainer>
      {guest?.fields?.is_invited_reception && (
        <AnswerContainer>
          <Answer>Is attending reception?</Answer>
          <Answer>{guest.fields.is_attending_reception ? "Yes" : "No"}</Answer>
        </AnswerContainer>
      )}
    </GuestContainer>
  );
}

GuestDetails.propTypes = {
  guest: PropTypes.shape({
    fields: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      is_invited_mendhi: PropTypes.bool.isRequired,
      is_invited_reception: PropTypes.bool.isRequired,
      is_attending_nikkah: PropTypes.bool.isRequired,
      is_attending_reception: PropTypes.bool.isRequired,
      is_attending_mendhi: PropTypes.bool.isRequired,
    }),
  }).isRequired,
};

export default GuestDetails;
