import { Grid } from '@material-ui/core';
import React from 'react';
// eslint-disable-next-line max-len
import InicitalContainer from '../../components/InictialContainer/InicitalContainer';
import ListUsers from '../../components/ListUsers/ListUsers';
import SearchUser from '../../components/SearchUser/SearchUser';

const SearchContact:React.FC = () => (
  <InicitalContainer>
    <>
      <Grid container spacing={2}>
        <SearchUser />
        <Grid item xs={12}>
          <ListUsers />
        </Grid>
      </Grid>
    </>
  </InicitalContainer>
);

export default SearchContact;
