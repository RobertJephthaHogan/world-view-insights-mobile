import { Dimensions, FlatList, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';



const screenHeight = Dimensions.get('window').height;

export default function TabTwoScreen() {


	const stockRow = ({ item }: any) => (
		<View style={styles.stockRow}>
		  <Text style={styles.title}>{item.title} ({item.symbol})</Text>
		  <Text style={styles.price}>${item.price}</Text>
		  <Text style={item.percentChange >= 0 ? styles.positive : styles.negative}>
			{item.percentChange}%
		  </Text>
		</View>
	);
	
	return (
		<ScrollView style={styles.container}>
			<ScrollView 
				horizontal={true} 
				style={styles.scrollViewContainer}
				showsHorizontalScrollIndicator={true}
			>
				{stockIndexes.map((stock, index) => (
					<StockCard key={index} {...stock} />
				))}
			</ScrollView>
			<View>
				<Text style={styles.stockSectionTitle}>
					S&P 500 Market Leaders
				</Text>
				<View style={styles.stockListContainer}>
					<FlatList
						data={mockStockData}
						renderItem={stockRow}
						keyExtractor={item => item.symbol}
						/>
				</View>
			</View>
		</ScrollView>
	);
}

interface IndexCardProps {
	title?: string
	symbol?: string
	price?: string
	percentChange?: string
	grossChange?: string
}

const StockCard = ({ title, symbol, price, percentChange, grossChange }: any) => {
	const percentChangeStyle = percentChange.startsWith('-') ? styles.negative : styles.positive;

	return (
		(
	
			<View style={styles.card}>
				{/* <View style={styles.avatar}>
					<Text>{title[0]}</Text>
				</View> */}
				<Text style={styles.title}>{title}</Text>
				<View  style={styles.symbolContainer}>
					<Text style={styles.symbol}>{symbol}</Text>
				</View>
				<Text style={styles.price}>{price}</Text>
				<Text style={[styles.percentChange, percentChangeStyle]}>{percentChange}</Text>
			</View>
		)
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	stockListContainer: {
		//maxHeight: screenHeight /2
	},
	stockSectionTitle: {
		fontSize: 20,
		marginLeft: 20,
		marginTop: 20,
	},
	avatar: {
		borderRadius: 30/2,
		width: 30,
		height: 30,
		flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
		backgroundColor: "#f1f1f1"
	},
	scrollViewContainer: {
		padding: 10,
		maxHeight: 200,
		alignContent: 'center',
	},
	card: {
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		margin: 5,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	title: {
		fontSize: 20,
		color: "#616161",
		fontWeight: "500",
	},
	symbolContainer: {
		backgroundColor: "#f1f1f1",
		paddingHorizontal: 5,
		borderRadius: 5
	},
	symbol: {
		fontSize: 10
	},
	price: {
		fontSize: 20,
		fontWeight: "700"
	},
	percentChange: {
		
	},
	grossChange: {
		
	},
	positive: {
		color: 'green',
	},
	negative: {
		color: 'red',
	},
	stockRow: {
		//backgroundColor: '#f9c2ff',
		paddingHorizontal: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderBottomWidth: 1,
		borderBlockColor: '#dfdfdf'
	},

});



const stockIndexes = [
  { title: "S&P 500", symbol: "SPX", price: "4890.9", percentChange: "-0.07%", grossChange: "-3.43" },
  { title: "Nasdaq", symbol: "NDX", price: "13058.6", percentChange: "0.15%", grossChange: "19.75" },
  { title: "Wilshire 5000", symbol: "WLSH", price: "35672.8", percentChange: "-0.10%", grossChange: "-35.68" },
  { title: "Russell 2000", symbol: "RUT", price: "2234.1", percentChange: "0.25%", grossChange: "5.58" },
  { title: "Euro Stoxx 50", symbol: "ESTX", price: "3970.5", percentChange: "-0.30%", grossChange: "-11.91" }
];

const mockStockData = [
	{ title: "Apple Inc.", symbol: "AAPL", price: 150.34, percentChange: 0.8 },
	{ title: "Microsoft Corporation", symbol: "MSFT", price: 280.56, percentChange: -0.4 },
	{ title: "Amazon.com Inc.", symbol: "AMZN", price: 3300.51, percentChange: 1.2 },
	{ title: "Alphabet Inc. (Class A)", symbol: "GOOGL", price: 2752.42, percentChange: -0.6 },
	{ title: "Facebook Inc.", symbol: "FB", price: 355.67, percentChange: 0.5 },
	{ title: "Tesla Inc.", symbol: "TSLA", price: 710.44, percentChange: -1.1 },
	{ title: "Berkshire Hathaway Inc.", symbol: "BRK.A", price: 418500.00, percentChange: 0.3 },
	{ title: "Visa Inc.", symbol: "V", price: 235.60, percentChange: 0.7 },
	{ title: "Johnson & Johnson", symbol: "JNJ", price: 170.25, percentChange: 0.2 },
	{ title: "Walmart Inc.", symbol: "WMT", price: 140.54, percentChange: -0.5 }
  ];