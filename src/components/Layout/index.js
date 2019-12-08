// @packages
import React from 'react';
import './styles.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// @own
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

function Layout({ children }) {
  return (
    <Container style={{
      maxWidth: 'initial',
    }}>
      <Grid className="layout" container spacing={2}>
        <Grid className="layout__header" item xs={12}>
          <Header />
        </Grid>
        <Grid className="layout__content" container item xs={12}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
