import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

type Product = {
  id: string;
  name: string;
  price: number;
};

const PRODUCTS: Product[] = [
  { id: '1', name: 'Wireless Mouse', price: 2500 },
  { id: '2', name: 'Mechanical Keyboard', price: 8500 },
  { id: '3', name: 'USB-C Hub', price: 4200 },
  { id: '4', name: 'Laptop Stand', price: 3000 },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle" style={styles.appName}>
          Expo Product Explorer
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedText style={styles.name}>Muhammad Abdullah Javed</ThemedText>
          <ThemedText style={styles.rollNo}>Roll No: 23I-3010</ThemedText
        </ThemedView>

        <ThemedText type="smallBold" style={styles.sectionTitle}>
          Products
        </ThemedText>

        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <ThemedView type="backgroundElement" style={styles.productRow}>
              <ThemedText style={styles.productName}>{item.name}</ThemedText>
              <ThemedText>Rs. {item.price.toLocaleString()}</ThemedText>
            </ThemedView>
          )}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.five,
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  appName: {
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    gap: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rollNo: {
    fontSize: 18,
    textAlign: 'center',
  },
  sectionTitle: {
    marginTop: Spacing.two,
  },
  list: {
    flex: 1,
  },
  listContent: {
    gap: Spacing.two,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    borderRadius: Spacing.three,
  },
  productName: {
    fontWeight: '600',
  },
});
