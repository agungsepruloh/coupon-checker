const { Schema, model } = require("mongoose");
const { CouponTypeEnum } = require("../shared/coupon_type_enum");
const { oneMonthFromNow } = require("../shared/custom_methods");

const CouponSchema = new Schema({
	name: {
		type: String,
	},
	couponType: {
		type: String,
		default: CouponTypeEnum.FIX,
		required: true,
	},
	amount: {
		type: Number,
		default: 0,
		required: true,
	},
	createdOn: {
		type: Date,
		default: Date.now,
	},
	updatedOn: {
		type: Date,
		default: Date.now,
	},
	expiredOn: {
		type: Date,
		default: oneMonthFromNow,
		required: true,
	},
});

CouponSchema.methods.isExpired = () => this.expiredOn < Date.now();

module.exports = Coupon = model("coupons", CouponSchema);
