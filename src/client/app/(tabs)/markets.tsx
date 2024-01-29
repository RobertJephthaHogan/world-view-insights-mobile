import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
	return (
		<View style={styles.container}>
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
			<Text>
				Body
			</Text>
		</View>
		</View>
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
		color: "#6161616",
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

});



const stockIndexes = [
  { title: "S&P 500", symbol: "SPX", price: "4890.9", percentChange: "-0.07%", grossChange: "-3.43" },
  { title: "Nasdaq", symbol: "NDX", price: "13058.6", percentChange: "0.15%", grossChange: "19.75" },
  { title: "Wilshire 5000", symbol: "WLSH", price: "35672.8", percentChange: "-0.10%", grossChange: "-35.68" },
  { title: "Russell 2000", symbol: "RUT", price: "2234.1", percentChange: "0.25%", grossChange: "5.58" },
  { title: "Euro Stoxx 50", symbol: "ESTX", price: "3970.5", percentChange: "-0.30%", grossChange: "-11.91" }
];