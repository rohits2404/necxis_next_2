'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button, Box, Typography, Avatar, Paper } from '@mui/material';

export default function SignInButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Paper
        elevation={3}
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderRadius: 2,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Avatar alt={session.user?.name ?? 'User'} src={session.user?.image ?? undefined} />
        <Box>
          <Typography variant="h6">Welcome,</Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {session.user?.name}
          </Typography>
        </Box>
        <Box ml="auto">
          <Button variant="contained" color="primary" onClick={() => signOut()}>
            Sign Out
          </Button>
        </Box>
      </Paper>
    );
  }

  return (
    <Button variant="contained" color="primary" onClick={() => signIn('google')}>
      Sign in with Google
    </Button>
  );
}
