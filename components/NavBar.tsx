import * as React from 'react';
import { View, Pressable } from 'react-native';
import { Home, Heart, Search, User } from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cssInterop } from 'nativewind';

export function NavBar() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = React.useState('home');

  const tabs = [
    { id: 'home', icon: Home },
    { id: 'favorites', icon: Heart },
    { id: 'search', icon: Search },
    { id: 'user', icon: User },
  ];

  return (
    <View 
      className="absolute bottom-0 w-full items-center pointer-events-auto" 
      style={{ paddingBottom: Math.max(insets.bottom, 24) }}
    >
      <View className="flex-row items-center justify-between bg-zinc-900 dark:bg-white rounded-full px-6 py-3 shadow-2xl w-[90%] max-w-sm border border-zinc-800 dark:border-zinc-200">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Pressable
              key={tab.id}
              onPress={() => setActiveTab(tab.id)}
              className={`items-center justify-center p-3 rounded-full transition-colors ${
                isActive ? 'bg-zinc-800 dark:bg-zinc-100' : 'bg-transparent'
              }`}
            >
              <Icon 
                as={tab.icon} 
                className={
                  isActive 
                    ? 'text-white dark:text-black' 
                    : 'text-zinc-500 dark:text-zinc-400'
                } 
                size={22} 
                strokeWidth={isActive ? 2.5 : 2}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
