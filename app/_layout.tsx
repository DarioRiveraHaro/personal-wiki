import { Stack } from 'expo-router';
import { PortalHost } from '@rn-primitives/portal';
import '../global.css';

export default function Layout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <PortalHost />
    </>
  );
}
