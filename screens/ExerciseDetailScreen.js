import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function ExerciseDetailScreen({ route, navigation }) {
  const { exerciseName = 'Bench Press' } = route.params || {};

  // Extended dummy data for bench press over time
  const exerciseData = [
    { date: '2025-05-15', weight: 50, sets: 3, reps: 10 },
    { date: '2025-05-18', weight: 52, sets: 3, reps: 9 },
    { date: '2025-05-22', weight: 55, sets: 4, reps: 8 },
    { date: '2025-05-25', weight: 55, sets: 4, reps: 10 },
    { date: '2025-05-29', weight: 57, sets: 4, reps: 8 },
    { date: '2025-06-01', weight: 60, sets: 4, reps: 8 },
    { date: '2025-06-04', weight: 60, sets: 4, reps: 9 },
    { date: '2025-06-08', weight: 62, sets: 4, reps: 8 },
    { date: '2025-06-11', weight: 65, sets: 3, reps: 8 },
    { date: '2025-06-14', weight: 65, sets: 4, reps: 9 },
  ];

  // Enhanced chart data with vibrant colors
  const chartData = {
    labels: exerciseData.map(d => d.date.slice(5)),
    datasets: [
      {
        data: exerciseData.map(d => d.weight),
        color: (opacity = 1) => `rgba(255, 71, 87, ${opacity})`,
        strokeWidth: 4,
      },
      {
        data: exerciseData.map(d => d.sets * 10),
        color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
        strokeWidth: 4,
      },
      {
        data: exerciseData.map(d => d.reps * 5),
        color: (opacity = 1) => `rgba(46, 213, 115, ${opacity})`,
        strokeWidth: 4,
      },
    ],
  };

  // Simplified chart configuration
  const chartConfig = {
    backgroundColor: '#667eea',
    backgroundGradientFrom: '#667eea',
    backgroundGradientFromOpacity: 0.4,
    backgroundGradientTo: '#764ba2',
    backgroundGradientToOpacity: 0.1,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '3',
      stroke: '#ffffff',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{exerciseName}</Text>
        <Text style={styles.subtitle}>Progress Tracking</Text>
      </View>

      <View style={styles.chartSection}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartTitle}>Performance Over Time</Text>
          <Text style={styles.chartSubtitle}>Weight, Sets & Reps Progress</Text>
        </View>
        
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={screenWidth - 60}
            height={280}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>
        
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#ff4757' }]} />
            <Text style={styles.legendText}>Weight</Text>
            <Text style={styles.currentValue}>{exerciseData[exerciseData.length - 1].weight}kg</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#4a90e2' }]} />
            <Text style={styles.legendText}>Sets</Text>
            <Text style={styles.currentValue}>{exerciseData[exerciseData.length - 1].sets}</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#2ed573' }]} />
            <Text style={styles.legendText}>Reps</Text>
            <Text style={styles.currentValue}>{exerciseData[exerciseData.length - 1].reps}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>+15kg</Text>
            <Text style={styles.statLabel}>Total Gain</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Sessions</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>30%</Text>
            <Text style={styles.statLabel}>Improvement</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>4.2</Text>
            <Text style={styles.statLabel}>Avg Sets</Text>
          </View>
        </View>
      </View>

      <View style={styles.dataTable}>
        <Text style={styles.tableTitle}>Recent Sessions</Text>
        {exerciseData.slice(-5).reverse().map((session, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableDate}>{session.date}</Text>
            <Text style={styles.tableData}>{session.weight}kg</Text>
            <Text style={styles.tableData}>{session.sets} sets</Text>
            <Text style={styles.tableData}>{session.reps} reps</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: '#16213e',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  chartSection: {
    margin: 20,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    borderRadius: 25,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.3)',
  },
  chartHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  chartSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  chartContainer: {
    backgroundColor: 'rgba(102, 126, 234, 0.15)',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  chart: {
    borderRadius: 20,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
  },
  legendItem: {
    alignItems: 'center',
  },
  legendDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  legendText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  currentValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  dataTable: {
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  tableDate: {
    flex: 2,
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  tableData: {
    flex: 1,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
});
