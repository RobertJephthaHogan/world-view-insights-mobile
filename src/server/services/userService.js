const User = require('../models/User'); 

class UserService {
    constructor() {
        this.userModel = User;
    }

    async createUser(userData) {
        try {
            const user = new this.userModel(userData);
            await user.save();
            return user;
        } catch (error) {
            console.log('error', error)
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const user = await this.userModel.findById(userId);
            return user;
        } catch (error) {
            console.log('error', error)
            throw error;
        }
    }

    async updateUser(userId, updateData) {
        try {
            const updatedUser = await this.userModel.findByIdAndUpdate(userId, updateData, { new: true });
            return updatedUser;
        } catch (error) {
            console.log('error', error)
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const deletedUser = await this.userModel.findByIdAndDelete(userId);
            return deletedUser;
        } catch (error) {
            console.log('error', error)
            throw error;
        }
    }

    async listUsers(queryParams) {
        try {
            // Implement logic to handle queryParams (like filtering, pagination, etc.)
            const users = await this.userModel.find(queryParams);
            return users;
        } catch (error) {
            console.log('error', error)
            throw error;
        }
    }
}

module.exports = UserService;
