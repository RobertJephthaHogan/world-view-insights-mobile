import { Pressable, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';

export default function TabOneScreen() {

	const [category, setCategory] = useState<string>('all')

	const handleCategoryButtonPress = (value: string) => {
		console.log(`${value} Pressed`);
		setCategory(value)
	};

	return (
		<View style={styles.container}>
			<ScrollView 
				horizontal={true} 
				showsHorizontalScrollIndicator={true}
				style={styles.scrollview}
			>
				<View style={styles.categoryBar}>
					<Pressable 
						style={({ pressed }) => [
							styles.button,
							pressed && styles.pressedButton
						]}
						onPress={() => handleCategoryButtonPress('all')}
					>
						<Text style={styles.buttonText}>
							All News
						</Text>
					</Pressable>
					<Pressable 
						style={({ pressed }) => [
							styles.button,
							pressed && styles.pressedButton
						]}
						onPress={() => handleCategoryButtonPress('market')}
					>
						<Text style={styles.buttonText}>
							Market News
						</Text>
					</Pressable>
					<Pressable 
						style={({ pressed }) => [
							styles.button,
							pressed && styles.pressedButton
						]}
						onPress={() => handleCategoryButtonPress('tech')}
					>
						<Text style={styles.buttonText}>
							Tech News
						</Text>
					</Pressable>
					<Pressable 
						style={({ pressed }) => [
							styles.button,
							pressed && styles.pressedButton
						]}
						onPress={() => handleCategoryButtonPress('politics')}
					>
						<Text style={styles.buttonText}>
							Political News
						</Text>
					</Pressable>
					
				</View>
			</ScrollView>
			<View style={styles.body}>
				<Text>
					Main Page Content
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
  	},
	scrollview: {
		maxHeight: 80
	},
  	categoryBar: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		maxHeight: 80,
		paddingVertical: 10
  	},
  	button: {
		backgroundColor: '#007bff',
		paddingVertical: 8, 
		paddingHorizontal: 16, 
		marginHorizontal: 5, 
		borderRadius: 5,
		height: 40, 
	},
	pressedButton: {
        backgroundColor: '#0056b3', // Darker shade when pressed
        opacity: 0.8, // Slightly transparent when pressed
    },
	buttonText: {
		color: 'white', 
		fontWeight: 'bold',
	},
	body: {
		flex: 1,
	}
});
