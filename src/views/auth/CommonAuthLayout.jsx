import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/cards/MainCard';

// assets
import Logo from 'assets/images/logo-dks.png';

// ==============================|| COMMON AUTH LAYOUT ||============================== //

export default function CommonAuthLayout({ title, subHeading, footerLink, children }) {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ bgcolor: 'common.black', height: 1, minHeight: '100vh' }}>
      <Grid size={{ xs: 11, sm: 7, md: 6, lg: 4 }}>
        <MainCard
          sx={{
            overflow: 'visible',
            display: 'flex',
            position: 'relative',
            '& .MuiCardContent-root': { flexGrow: 1, flexBasis: '50%', width: '50%' },
            maxWidth: 475,
            margin: '24px auto'
          }}
          contentSX={{ flexGrow: 1, flexBasis: '50%', width: '50%', px: 4, pt: 5 }}
        >
          <Stack direction="column" sx={{ mb: 2, gap: 4, justifyContent: 'center' }}>
            <Stack
              direction={{ xs: 'column-reverse', sm: 'row' }}
              sx={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: { xs: 2, sm: 1 } }}
            >
              <Box>
                <Typography color="text.primary" gutterBottom variant="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize={13}>
                  {subHeading}
                </Typography>
              </Box>
              <Link to="/">
                <Box sx={{borderRadius:10 , p:2 , background:'linear-gradient(to right, rgba(14, 26, 116, 1) 0%, rgba(188, 5, 5, 1) 50%, rgba(80, 17, 62, 1) 100%)'}}>
                  <CardMedia component="img" sx={{ width: 150, height: 'auto' }} image={Logo} alt="logo" />
                </Box>
              </Link>
            </Stack>

            {children}
          </Stack>
          {/* {footerLink && (
            <Typography variant="subtitle2" color="text.secondary" component={Link} to={footerLink.link} sx={{ textDecoration: 'none' }}>
              {footerLink.title}
            </Typography>
          )} */}
        </MainCard>
      </Grid>
    </Grid>
  );
}

CommonAuthLayout.propTypes = {
  title: PropTypes.string,
  subHeading: PropTypes.string,
  footerLink: PropTypes.object,
  children: PropTypes.node
};
