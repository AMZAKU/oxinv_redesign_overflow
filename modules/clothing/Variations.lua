function AddNewVariation(which, gender, one, two, single)
	local Where = Variations[which][gender]
	if not single then
		Where[one] = two
		Where[two] = one
	else
		Where[one] = two
	end
end

--[[
		This is where all the different variations go.
		For jackets i included extra things that arent just hoodies aswell, things like the christmas sweater with their different lights.
		So doing the command whilst wearing the christmas sweater you can toggle the light.

		Tip for adding new ones of this is to toggle Config.Debug, and use vMenu Player Appearance to switch around.

		If you are using EUP you might have to change things around!
		But it should be easy enough to understand and make changes as you want.

		Simply just : 

		AddNewVariation(Table, Gender, First, Second)

		And for Hair there is also the "single" var.
		Its important for haircuts.
]]--

Citizen.CreateThread(function()
	-- Male Visor/Hat Variations


	AddNewVariation("Visor", "Male", 240, 241)
	AddNewVariation("Visor", "Male", 201, 204)
	AddNewVariation("Visor", "Male", 197, 198)
	AddNewVariation("Visor", "Male", 192, 193)
	AddNewVariation("Visor", "Male", 189, 190)
	AddNewVariation("Visor", "Male", 181, 183)
	AddNewVariation("Visor", "Male", 184, 182)
	AddNewVariation("Visor", "Male", 176, 177)
	AddNewVariation("Visor", "Male", 174, 173)
	AddNewVariation("Visor", "Male", 171, 167)
	AddNewVariation("Visor", "Male", 166, 168)
	AddNewVariation("Visor", "Male", 164, 165)
	AddNewVariation("Visor", "Male", 162, 163)
	AddNewVariation("Visor", "Male", 161, 159)
	AddNewVariation("Visor", "Male", 157, 158)
	AddNewVariation("Visor", "Male", 154, 155)
	AddNewVariation("Visor", "Male", 151, 152)
	AddNewVariation("Visor", "Male", 147, 148)
	AddNewVariation("Visor", "Male", 142, 143)
	AddNewVariation("Visor", "Male", 139, 140)
	AddNewVariation("Visor", "Male", 137, 138)
	AddNewVariation("Visor", "Male", 135, 136)
	AddNewVariation("Visor", "Male", 130, 131)
	AddNewVariation("Visor", "Male", 127, 128)
	AddNewVariation("Visor", "Male", 125, 126)
	AddNewVariation("Visor", "Male", 123, 124)
	AddNewVariation("Visor", "Male", 118, 119)
	AddNewVariation("Visor", "Male", 116, 117)
	AddNewVariation("Visor", "Male", 110, 109)
	AddNewVariation("Visor", "Male", 91, 92)
	AddNewVariation("Visor", "Male", 80, 81)
	AddNewVariation("Visor", "Male", 76, 77)
	AddNewVariation("Visor", "Male", 73, 74)
	AddNewVariation("Visor", "Male", 65, 66)
	AddNewVariation("Visor", "Male", 67, 18)
	-- -- Female Visor/Hat Variations
	AddNewVariation("Visor", "Female", 196, 197)
	AddNewVariation("Visor", "Female", 193, 194)
	AddNewVariation("Visor", "Female", 192, 195)
	AddNewVariation("Visor", "Female", 188, 189)
	AddNewVariation("Visor", "Female", 180, 182)
	AddNewVariation("Visor", "Female", 181, 183)
	AddNewVariation("Visor", "Female", 175, 176)
	AddNewVariation("Visor", "Female", 172, 173)
	AddNewVariation("Visor", "Female", 163, 164)
	AddNewVariation("Visor", "Female", 165, 167)
	AddNewVariation("Visor", "Female", 161, 162)
	AddNewVariation("Visor", "Female", 157, 159)
	AddNewVariation("Visor", "Female", 158, 160)
	AddNewVariation("Visor", "Female", 153, 154)
	AddNewVariation("Visor", "Female", 150, 151)
	AddNewVariation("Visor", "Female", 141, 142)
	AddNewVariation("Visor", "Female", 138, 139)
	AddNewVariation("Visor", "Female", 129, 130)
	AddNewVariation("Visor", "Female", 108, 109)
	AddNewVariation("Visor", "Female", 75, 76)
	AddNewVariation("Visor", "Female", 64, 65)	
	-- Male Bags
	AddNewVariation("Bags", "Male", 45, 44)
	AddNewVariation("Bags", "Male", 41, 40)
	-- Female Bags
	AddNewVariation("Bags", "Female", 45, 44)
	AddNewVariation("Bags", "Female", 41, 40)
	-- Male Hair
	AddNewVariation("Hair", "Male", 190, 3, true)
	AddNewVariation("Hair", "Male", 192, 31, true)
	AddNewVariation("Hair", "Male", 186, 173, true)
	AddNewVariation("Hair", "Male", 235, 1, true)
	AddNewVariation("Hair", "Male", 182, 1, true)
	AddNewVariation("Hair", "Male", 200, 1, true)
	AddNewVariation("Hair", "Male", 204, 73, true)
	AddNewVariation("Hair", "Male", 250, 73, true)
	AddNewVariation("Hair", "Male", 176, 43, true)
	AddNewVariation("Hair", "Male", 11, 43, true)
	AddNewVariation("Hair", "Male", 15, 43, true)
	AddNewVariation("Hair", "Male", 16, 43, true)
	AddNewVariation("Hair", "Male", 17, 43, true)
	AddNewVariation("Hair", "Male", 20, 43, true)
	AddNewVariation("Hair", "Male", 22, 43, true)
	AddNewVariation("Hair", "Male", 45, 43, true)
	AddNewVariation("Hair", "Male", 47, 43, true)
	AddNewVariation("Hair", "Male", 49, 43, true)
	AddNewVariation("Hair", "Male", 51, 43, true)
	AddNewVariation("Hair", "Male", 52, 43, true)
	AddNewVariation("Hair", "Male", 53, 43, true)
	AddNewVariation("Hair", "Male", 56, 43, true)
	AddNewVariation("Hair", "Male", 58, 43, true)

	for i=1, 172, 1 do
		AddNewVariation("Hair", "Male", i, 1, true)
	end

	
	-- Female Hair
	-- AddNewVariation("Hair", "Female", 1, 49, true)
	-- AddNewVariation("Hair", "Female", 2, 49, true)
	-- AddNewVariation("Hair", "Female", 7, 49, true)
	-- AddNewVariation("Hair", "Female", 9, 49, true)
	-- AddNewVariation("Hair", "Female", 10, 49, true)
	-- AddNewVariation("Hair", "Female", 11, 48, true)
	-- AddNewVariation("Hair", "Female", 14, 53, true)
	-- AddNewVariation("Hair", "Female", 15, 42, true)
	-- AddNewVariation("Hair", "Female", 21, 42, true)
	-- AddNewVariation("Hair", "Female", 23, 42, true)
	-- AddNewVariation("Hair", "Female", 31, 53, true)
	-- AddNewVariation("Hair", "Female", 37, 54, true)
	-- AddNewVariation("Hair", "Female", 39, 49, true)
	-- AddNewVariation("Hair", "Female", 40, 49, true)
	-- AddNewVariation("Hair", "Female", 42, 53, true)
	-- AddNewVariation("Hair", "Female", 45, 49, true)
	-- AddNewVariation("Hair", "Female", 48, 49, true)
	-- AddNewVariation("Hair", "Female", 49, 48, true)
	-- AddNewVariation("Hair", "Female", 52, 53, true)
	-- AddNewVariation("Hair", "Female", 53, 42, true)
	-- AddNewVariation("Hair", "Female", 54, 55, true)
	-- AddNewVariation("Hair", "Female", 59, 42, true)
	-- AddNewVariation("Hair", "Female", 59, 54, true)
	-- AddNewVariation("Hair", "Female", 68, 53, true)
	-- AddNewVariation("Hair", "Female", 76, 48, true)
	
	-- AddNewVariation("Hair", "Female", 84, 128, true)
	-- AddNewVariation("Hair", "Female", 85, 146, true)
	-- AddNewVariation("Hair", "Female", 86, 119, true)
	-- AddNewVariation("Hair", "Female", 87, 144, true)
	-- AddNewVariation("Hair", "Female", 89, 133, true)
	-- AddNewVariation("Hair", "Female", 90, 146, true)
	-- AddNewVariation("Hair", "Female", 91, 119, true)
	-- AddNewVariation("Hair", "Female", 92, 146, true)
	-- AddNewVariation("Hair", "Female", 93, 101, true)
	-- AddNewVariation("Hair", "Female", 94, 196, true)
	-- AddNewVariation("Hair", "Female", 95, 85, true)
	-- AddNewVariation("Hair", "Female", 96, 88, true)
	-- AddNewVariation("Hair", "Female", 97, 101, true)
	-- AddNewVariation("Hair", "Female", 98, 161, true)
	-- AddNewVariation("Hair", "Female", 100, 178, true)
	-- AddNewVariation("Hair", "Female", 101, 146, true)
	-- AddNewVariation("Hair", "Female", 102, 101, true)
	-- AddNewVariation("Hair", "Female", 103, 189, true)
	-- AddNewVariation("Hair", "Female", 109, 146, true)
	-- AddNewVariation("Hair", "Female", 117, 92, true)--tocada
	-- AddNewVariation("Hair", "Female", 118, 186, true)
	-- AddNewVariation("Hair", "Female", 119, 173, true) 
	-- AddNewVariation("Hair", "Female", 120, 172, true)
	-- AddNewVariation("Hair", "Female", 122, 119, true)
	-- AddNewVariation("Hair", "Female", 123, 146, true)
	-- AddNewVariation("Hair", "Female", 124, 162, true) --tocada
	-- AddNewVariation("Hair", "Female", 126, 119, true)
	-- AddNewVariation("Hair", "Female", 127,  128, true)
	-- AddNewVariation("Hair", "Female", 128, 145, true)
	-- AddNewVariation("Hair", "Female", 129, 110, true) --tocada
	-- AddNewVariation("Hair", "Female", 130, 189, true)
	-- AddNewVariation("Hair", "Female", 132, 235, true) --tocada
	-- AddNewVariation("Hair", "Female", 133, 189, true)
	-- AddNewVariation("Hair", "Female", 134, 150, true)
	-- AddNewVariation("Hair", "Female", 135, 146, true)
	-- AddNewVariation("Hair", "Female", 136, 137, true)
	-- AddNewVariation("Hair", "Female", 137, 136, true)
	-- AddNewVariation("Hair", "Female", 138, 119, true)
	-- AddNewVariation("Hair", "Female", 139, 151, true)
	-- AddNewVariation("Hair", "Female", 140, 172, true)
	-- AddNewVariation("Hair", "Female", 141, 166, true)
	-- AddNewVariation("Hair", "Female", 142, 192, true)--tocada
	-- AddNewVariation("Hair", "Female", 143, 162, true)
	-- AddNewVariation("Hair", "Female", 144, 89, true)
	-- AddNewVariation("Hair", "Female", 145, 166, true)
	-- AddNewVariation("Hair", "Female", 146, 147, true)
	-- AddNewVariation("Hair", "Female", 147, 128, true)
	-- AddNewVariation("Hair", "Female", 148, 151, true)
	-- AddNewVariation("Hair", "Female", 149, 115, true)
	-- AddNewVariation("Hair", "Female", 150, 117, true)
	-- AddNewVariation("Hair", "Female", 151, 146, true)
	-- AddNewVariation("Hair", "Female", 152, 162, true)
	-- AddNewVariation("Hair", "Female", 153, 94, true)
	-- AddNewVariation("Hair", "Female", 154, 161, true)
	-- AddNewVariation("Hair", "Female", 155, 120, true)
	-- AddNewVariation("Hair", "Female", 156, 157, true)
	-- AddNewVariation("Hair", "Female", 157, 128, true)
	-- AddNewVariation("Hair", "Female", 158, 164, true)
	-- AddNewVariation("Hair", "Female", 159, 119, true)
	-- AddNewVariation("Hair", "Female", 160, 147, true) 
	-- AddNewVariation("Hair", "Female", 161, 154, true)
	-- AddNewVariation("Hair", "Female", 162, 172, true)
	-- AddNewVariation("Hair", "Female", 163, 173, true) 
	-- AddNewVariation("Hair", "Female", 164, 176, true)
	-- AddNewVariation("Hair", "Female", 165, 110, true)--tocada
	-- AddNewVariation("Hair", "Female", 166, 172, true)
	-- AddNewVariation("Hair", "Female", 167, 193, true)
	-- AddNewVariation("Hair", "Female", 168, 153, true)
	-- AddNewVariation("Hair", "Female", 169, 119, true)
	-- AddNewVariation("Hair", "Female", 170, 172, true)
	-- AddNewVariation("Hair", "Female", 171, 128, true)
	-- AddNewVariation("Hair", "Female", 172, 197, true)
	-- AddNewVariation("Hair", "Female", 173, 119, true)
	-- AddNewVariation("Hair", "Female", 174, 176, true)
	-- AddNewVariation("Hair", "Female", 175, 177, true)
	-- AddNewVariation("Hair", "Female", 176, 164, true)
	-- AddNewVariation("Hair", "Female", 177, 146, true)
	-- AddNewVariation("Hair", "Female", 178, 164, true)
	-- AddNewVariation("Hair", "Female", 179, 181, true)
	-- AddNewVariation("Hair", "Female", 180,194, true)
	-- AddNewVariation("Hair", "Female", 181, 179, true)
	-- AddNewVariation("Hair", "Female", 182, 179, true)
	-- AddNewVariation("Hair", "Female", 183, 189, true)
	-- AddNewVariation("Hair", "Female", 184, 109, true)
	-- AddNewVariation("Hair", "Female", 185, 194, true)
	-- AddNewVariation("Hair", "Female", 186, 146, true)
	-- AddNewVariation("Hair", "Female", 187, 168, true)
	-- AddNewVariation("Hair", "Female", 188, 149, true)
	-- AddNewVariation("Hair", "Female", 189, 146, true)
	-- AddNewVariation("Hair", "Female", 190, 189, true)
	-- AddNewVariation("Hair", "Female", 191, 37, true)
	-- AddNewVariation("Hair", "Female", 192, 128, true)--tocada
	-- AddNewVariation("Hair", "Female", 193, 155, true)
	-- AddNewVariation("Hair", "Female", 194, 185, true)
	-- AddNewVariation("Hair", "Female", 195, 94, true)
	-- AddNewVariation("Hair", "Female", 197, 172, true)
	-- AddNewVariation("Hair", "Female", 203, 354, true)--tocada
	-- AddNewVariation("Hair", "Female", 211, 251, true)--tocada
	-- AddNewVariation("Hair", "Female", 235, 142, true)--tocada
	-- AddNewVariation("Hair", "Female", 246, 212, true)--tocada
	-- AddNewVariation("Hair", "Female", 204, 37, true) --tocada
	-- AddNewVariation("Hair", "Female", 255, 140, true) --tocada
	-- AddNewVariation("Hair", "Female", 252, 245, true) --tocada
	-- AddNewVariation("Hair", "Female", 283, 339, true) -- sevvi
	-- AddNewVariation("Hair", "Female", 301, 178, true) -- tocada
	-- AddNewVariation("Hair", "Female", 331, 234, true) -- tocada
	-- AddNewVariation("Hair", "Female", 244, 165, true) --tocada
	-- AddNewVariation("Hair", "Female", 195, 234, true) --tocada
	-- Male Top/Jacket Variations
	AddNewVariation("Jackets", "Male", 29, 30)
	AddNewVariation("Jackets", "Male", 31, 32)
	AddNewVariation("Jackets", "Male", 42, 43)
	AddNewVariation("Jackets", "Male", 68, 69)
	AddNewVariation("Jackets", "Male", 74, 75)
	AddNewVariation("Jackets", "Male", 87, 88)
	AddNewVariation("Jackets", "Male", 99, 100)
	AddNewVariation("Jackets", "Male", 101, 102)
	AddNewVariation("Jackets", "Male", 103, 104)
	AddNewVariation("Jackets", "Male", 126, 127)
	AddNewVariation("Jackets", "Male", 129, 130)
	AddNewVariation("Jackets", "Male", 184, 185)
	AddNewVariation("Jackets", "Male", 188, 189)
	AddNewVariation("Jackets", "Male", 194, 195)
	AddNewVariation("Jackets", "Male", 196, 197)
	AddNewVariation("Jackets", "Male", 198, 199)
	AddNewVariation("Jackets", "Male", 200, 203)
	AddNewVariation("Jackets", "Male", 202, 205)
	AddNewVariation("Jackets", "Male", 203, 1)
	AddNewVariation("Jackets", "Male", 206, 207)
	AddNewVariation("Jackets", "Male", 210, 211)
	AddNewVariation("Jackets", "Male", 217, 218)
	AddNewVariation("Jackets", "Male", 229, 230)
	AddNewVariation("Jackets", "Male", 232, 233)
	AddNewVariation("Jackets", "Male", 251, 253)
	AddNewVariation("Jackets", "Male", 256, 261)
	AddNewVariation("Jackets", "Male", 262, 263)
	AddNewVariation("Jackets", "Male", 265, 266)
	AddNewVariation("Jackets", "Male", 267, 268)
	AddNewVariation("Jackets", "Male", 279, 280)

	AddNewVariation("Jackets", "Male", 514, 513, true)
	AddNewVariation("Jackets", "Male", 414, 415, true)
	AddNewVariation("Jackets", "Male", 374, 373, true)
	AddNewVariation("Jackets", "Male", 353, 352, true)
	AddNewVariation("Jackets", "Male", 331, 330, true)
	AddNewVariation("Jackets", "Male", 353, 182, true)
	AddNewVariation("Jackets", "Male", 306, 305, true)
	AddNewVariation("Jackets", "Male", 302, 301, true)
	AddNewVariation("Jackets", "Male", 297, 296, true)
	AddNewVariation("Jackets", "Male", 280, 279, true)
	AddNewVariation("Jackets", "Male", 263, 262, true)
	AddNewVariation("Jackets", "Male", 253, 251, true)
	AddNewVariation("Jackets", "Male", 218, 217, true)
	AddNewVariation("Jackets", "Male", 211, 210, true)
	AddNewVariation("Jackets", "Male", 207, 206, true)
	AddNewVariation("Jackets", "Male", 69, 68, true)

	AddNewVariation("Jackets", "Male", 4, 10, true)
	AddNewVariation("Jackets", "Male", 3, 12, true)
	AddNewVariation("Jackets", "Male", 23, 24, true)
	AddNewVariation("Jackets", "Male", 31, 32, true)
	AddNewVariation("Jackets", "Male", 42, 43, true)
	AddNewVariation("Jackets", "Male", 59, 60, true)
	AddNewVariation("Jackets", "Male", 69, 68, true)
	AddNewVariation("Jackets", "Male", 87, 88, true)
	AddNewVariation("Jackets", "Male", 99, 100, true)
	AddNewVariation("Jackets", "Male", 127, 126, true)
	AddNewVariation("Jackets", "Male", 130, 129, true)
	AddNewVariation("Jackets", "Male", 185, 184, true)
	AddNewVariation("Jackets", "Male", 189, 188, true)
	AddNewVariation("Jackets", "Male", 210, 211, true)
	AddNewVariation("Jackets", "Male", 229, 230, true)
	AddNewVariation("Jackets", "Male", 232, 233, true)
	AddNewVariation("Jackets", "Male", 256, 261, true)
	AddNewVariation("Jackets", "Male", 262, 263, true)
	AddNewVariation("Jackets", "Male", 268, 267, true)
	AddNewVariation("Jackets", "Male", 293, 292, true)
	AddNewVariation("Jackets", "Male", 294, 295, true)
	AddNewVariation("Jackets", "Male", 301, 302, true)
	AddNewVariation("Jackets", "Male", 316, 317, true)
	AddNewVariation("Jackets", "Male", 318, 319, true)
	AddNewVariation("Jackets", "Male", 322, 321, true)
	AddNewVariation("Jackets", "Male", 340, 341, true)
	AddNewVariation("Jackets", "Male", 343, 344, true)
	AddNewVariation("Jackets", "Male", 349, 348, true)
	AddNewVariation("Jackets", "Male", 352, 353, true)
	AddNewVariation("Jackets", "Male", 354, 355, true)
	AddNewVariation("Jackets", "Male", 359, 360, true)
	AddNewVariation("Jackets", "Male", 374, 373, true)
	AddNewVariation("Jackets", "Male", 375, 376, true)
	AddNewVariation("Jackets", "Male", 381, 379, true)
	AddNewVariation("Jackets", "Male", 384, 385, true)
	AddNewVariation("Jackets", "Male", 386, 387, true)
	AddNewVariation("Jackets", "Male", 388, 390, true)
	AddNewVariation("Jackets", "Male", 389, 391, true)
	AddNewVariation("Jackets", "Male", 394, 395, true)
	AddNewVariation("Jackets", "Male", 415, 414, true)
	AddNewVariation("Jackets", "Male", 470, 471, true)
	
	-- Female Top/Jacket Variations
	AddNewVariation("Jackets", "Female", 53, 52) 
	AddNewVariation("Jackets", "Female", 57, 58) 
	AddNewVariation("Jackets", "Female", 62, 63) 
	AddNewVariation("Jackets", "Female", 90, 91) 
	AddNewVariation("Jackets", "Female", 92, 93) 
	AddNewVariation("Jackets", "Female", 94, 95) 
	AddNewVariation("Jackets", "Female", 187, 186)
	AddNewVariation("Jackets", "Female", 190, 191) 
	AddNewVariation("Jackets", "Female", 196, 197) 
	AddNewVariation("Jackets", "Female", 198, 199) 
	AddNewVariation("Jackets", "Female", 200, 201)
	AddNewVariation("Jackets", "Female", 202, 205) 
	AddNewVariation("Jackets", "Female", 204, 207) 
	AddNewVariation("Jackets", "Female", 210, 211)
	AddNewVariation("Jackets", "Female", 214, 215)
	AddNewVariation("Jackets", "Female", 227, 228) 
	AddNewVariation("Jackets", "Female", 239, 240) 
	AddNewVariation("Jackets", "Female", 242, 243) 
	AddNewVariation("Jackets", "Female", 259, 261)
	AddNewVariation("Jackets", "Female", 265, 270) 
	AddNewVariation("Jackets", "Female", 271, 272) 
	AddNewVariation("Jackets", "Female", 274, 275) 
	AddNewVariation("Jackets", "Female", 276, 277)
	AddNewVariation("Jackets", "Female", 292, 293) 
	
	AddNewVariation("Jackets", "Female", 408, 407)
	AddNewVariation("Jackets", "Female", 393, 392)
	AddNewVariation("Jackets", "Female", 371, 370)
	AddNewVariation("Jackets", "Female", 346, 345)
	AddNewVariation("Jackets", "Female", 317, 316)
	-- AddNewVariation("Jackets", "Female", 313, 312)
	AddNewVariation("Jackets", "Female", 308, 307)
	AddNewVariation("Jackets", "Female", 293, 292)
	AddNewVariation("Jackets", "Female", 272, 271)
	AddNewVariation("Jackets", "Female", 228, 227)
	AddNewVariation("Jackets", "Female", 215, 214)
	AddNewVariation("Jackets", "Female", 211, 210)
	AddNewVariation("Jackets", "Female", 62, 63)

	AddNewVariation("Jackets", "Female", 7, 24)
	AddNewVariation("Jackets", "Female", 52, 53)
	AddNewVariation("Jackets", "Female", 58, 57)
	AddNewVariation("Jackets", "Female", 63, 62)
	AddNewVariation("Jackets", "Female", 90, 91)
	AddNewVariation("Jackets", "Female", 120, 121)
	AddNewVariation("Jackets", "Female", 215, 214)
	AddNewVariation("Jackets", "Female", 216, 213)
	AddNewVariation("Jackets", "Female", 222, 221)
	AddNewVariation("Jackets", "Female", 305, 306)
	AddNewVariation("Jackets", "Female", 314, 312)
	AddNewVariation("Jackets", "Female", 313, 311)
	AddNewVariation("Jackets", "Female", 327, 328)
	AddNewVariation("Jackets", "Female", 329, 330)
	AddNewVariation("Jackets", "Female", 333, 332)
	AddNewVariation("Jackets", "Female", 339, 340)
	AddNewVariation("Jackets", "Female", 345, 346)
	AddNewVariation("Jackets", "Female", 355, 356)
	AddNewVariation("Jackets", "Female", 362, 363)
	AddNewVariation("Jackets", "Female", 366, 367)
	AddNewVariation("Jackets", "Female", 372, 373)
	AddNewVariation("Jackets", "Female", 378, 379)
	AddNewVariation("Jackets", "Female", 397, 399)
	AddNewVariation("Jackets", "Female", 402, 403)
	AddNewVariation("Jackets", "Female", 409, 411)
	AddNewVariation("Jackets", "Female", 410, 412)



	AddNewVariation("Glasses", "Male", 98, 99)
	AddNewVariation("Glasses", "Male", 96, 97)
	AddNewVariation("Glasses", "Male", 94, 95)
	AddNewVariation("Glasses", "Male", 92, 93)
	AddNewVariation("Glasses", "Male", 90, 91)
	AddNewVariation("Glasses", "Male", 86, 87)
	AddNewVariation("Glasses", "Male", 84, 85)
	AddNewVariation("Glasses", "Male", 82, 83)
	AddNewVariation("Glasses", "Male", 80, 81)
	AddNewVariation("Glasses", "Male", 78, 79)
	AddNewVariation("Glasses", "Male", 76, 77)
	AddNewVariation("Glasses", "Male", 74, 75)
	AddNewVariation("Glasses", "Male", 72, 73)
	AddNewVariation("Glasses", "Male", 70, 71)
	AddNewVariation("Glasses", "Male", 68, 69)
	AddNewVariation("Glasses", "Male", 66, 67)
	AddNewVariation("Glasses", "Male", 64, 65)
	AddNewVariation("Glasses", "Male", 62, 63)
	AddNewVariation("Glasses", "Male", 60, 61)
	AddNewVariation("Glasses", "Male", 58, 59)
	AddNewVariation("Glasses", "Male", 56, 57)
	AddNewVariation("Glasses", "Male", 54, 55)
	AddNewVariation("Glasses", "Male", 52, 53)

	AddNewVariation("Glasses", "Female", 54, 55)
	AddNewVariation("Glasses", "Female", 56, 57)
	AddNewVariation("Glasses", "Female", 58, 59)
	AddNewVariation("Glasses", "Female", 60, 61)
	AddNewVariation("Glasses", "Female", 62, 63)
	AddNewVariation("Glasses", "Female", 64, 65)
	AddNewVariation("Glasses", "Female", 66, 67)
	AddNewVariation("Glasses", "Female", 68, 69)
	AddNewVariation("Glasses", "Female", 70, 71)
	AddNewVariation("Glasses", "Female", 72, 73)	

end)

-- And this is the master table, i put it down here since it has all the glove variations, and thats quite the eyesore.
-- You probably dont wanna touch anything down here really.
-- I generated these glove ones with a tool i made, im pretty certain its accurate, there might be native function for this.
-- If there is i wish i knew of it before i spent hours doing it this way.

Variations = {
	Jackets = {Male = {}, Female = {}},
	Hair = {Male = {}, Female = {}},
	Bags = {Male = {}, Female = {}},
	Visor = {Male = {}, Female = {}},
	Glasses = {Male = {}, Female = {}},
	GlassesBack = {Male = {}, Female = {}},
	Gloves = {
		Male = {
			[16] = 4,
			[17] = 4,
			[18] = 4,
			[19] = 0,
			[20] = 1,
			[21] = 2,
			[22] = 4,
			[23] = 5,
			[24] = 6,
			[25] = 8,
			[26] = 11,
			[27] = 12,
			[28] = 14,
			[29] = 15,
			[30] = 0,
			[31] = 1,
			[32] = 2,
			[33] = 4,
			[34] = 5,
			[35] = 6,
			[36] = 8,
			[37] = 11,
			[38] = 12,
			[39] = 14,
			[40] = 15,
			[41] = 0,
			[42] = 1,
			[43] = 2,
			[44] = 4,
			[45] = 5,
			[46] = 6,
			[47] = 8,
			[48] = 11,
			[49] = 12,
			[50] = 14,
			[51] = 15,
			[52] = 0,
			[53] = 1,
			[54] = 2,
			[55] = 4,
			[56] = 5,
			[57] = 6,
			[58] = 8,
			[59] = 11,
			[60] = 12,
			[61] = 14,
			[62] = 15,
			[63] = 0,
			[64] = 1,
			[65] = 2,
			[66] = 4,
			[67] = 5,
			[68] = 6,
			[69] = 8,
			[70] = 11,
			[71] = 12,
			[72] = 14,
			[73] = 15,
			[74] = 0,
			[75] = 1,
			[76] = 2,
			[77] = 4,
			[78] = 5,
			[79] = 6,
			[80] = 8,
			[81] = 11,
			[82] = 12,
			[83] = 14,
			[84] = 15,
			[85] = 0,
			[86] = 1,
			[87] = 2,
			[88] = 4,
			[89] = 5,
			[90] = 6,
			[91] = 8,
			[92] = 11,
			[93] = 12,
			[94] = 14,
			[95] = 15,
			[96] = 4,
			[97] = 4,
			[98] = 4,
			[99] = 0,
			[100] = 1,
			[101] = 2,
			[102] = 4,
			[103] = 5,
			[104] = 6,
			[105] = 8,
			[106] = 11,
			[107] = 12,
			[108] = 14,
			[109] = 15,
			[110] = 4,
			[111] = 4,
			[115] = 112,
			[116] = 112,
			[117] = 112,
			[118] = 112,
			[119] = 112,
			[120] = 112,
			[121] = 112,
			[122] = 113,
			[123] = 113,
			[124] = 113,
			[125] = 113,
			[126] = 113,
			[127] = 113,
			[128] = 113,
			[129] = 114,
			[130] = 114,
			[131] = 114,
			[132] = 114,
			[133] = 114,
			[134] = 114,
			[135] = 114,
			[136] = 15,
			[137] = 15,
			[138] = 0,
			[139] = 1,
			[140] = 2,
			[141] = 4,
			[142] = 5,
			[143] = 6,
			[144] = 8,
			[145] = 11,
			[146] = 12,
			[147] = 14,
			[148] = 112,
			[149] = 113,
			[150] = 114,
			[151] = 0,
			[152] = 1,
			[153] = 2,
			[154] = 4,
			[155] = 5,
			[156] = 6,
			[157] = 8,
			[158] = 11,
			[159] = 12,
			[160] = 14,
			[161] = 112,
			[162] = 113,
			[163] = 114,
			[165] = 4,
			[166] = 4,
			[167] = 4,
		},
		Female = {
			[16] = 11,
			[17] = 3,
			[18] = 3,
			[19] = 3,
			[20] = 0,
			[21] = 1,
			[22] = 2,
			[23] = 3,
			[24] = 4,
			[25] = 5,
			[26] = 6,
			[27] = 7,
			[28] = 9,
			[29] = 11,
			[30] = 12,
			[31] = 14,
			[32] = 15,
			[33] = 0,
			[34] = 1,
			[35] = 2,
			[36] = 3,
			[37] = 4,
			[38] = 5,
			[39] = 6,
			[40] = 7,
			[41] = 9,
			[42] = 11,
			[43] = 12,
			[44] = 14,
			[45] = 15,
			[46] = 0,
			[47] = 1,
			[48] = 2,
			[49] = 3,
			[50] = 4,
			[51] = 5,
			[52] = 6,
			[53] = 7,
			[54] = 9,
			[55] = 11,
			[56] = 12,
			[57] = 14,
			[58] = 15,
			[59] = 0,
			[60] = 1,
			[61] = 2,
			[62] = 3,
			[63] = 4,
			[64] = 5,
			[65] = 6,
			[66] = 7,
			[67] = 9,
			[68] = 11,
			[69] = 12,
			[70] = 14,
			[71] = 15,
			[72] = 0,
			[73] = 1,
			[74] = 2,
			[75] = 3,
			[76] = 4,
			[77] = 5,
			[78] = 6,
			[79] = 7,
			[80] = 9,
			[81] = 11,
			[82] = 12,
			[83] = 14,
			[84] = 15,
			[85] = 0,
			[86] = 1,
			[87] = 2,
			[88] = 3,
			[89] = 4,
			[90] = 5,
			[91] = 6,
			[92] = 7,
			[93] = 9,
			[94] = 11,
			[95] = 12,
			[96] = 14,
			[97] = 15,
			[98] = 0,
			[99] = 1,
			[100] = 2,
			[101] = 3,
			[102] = 4,
			[103] = 5,
			[104] = 6,
			[105] = 7,
			[106] = 9,
			[107] = 11,
			[108] = 12,
			[109] = 14,
			[110] = 15,
			[111] = 3,
			[112] = 3,
			[113] = 3,
			[114] = 0,
			[115] = 1,
			[116] = 2,
			[117] = 3,
			[118] = 4,
			[119] = 5,
			[120] = 6,
			[121] = 7,
			[122] = 9,
			[123] = 11,
			[124] = 12,
			[125] = 14,
			[126] = 15,
			[127] = 3,
			[128] = 3,
			[132] = 129,
			[133] = 129,
			[134] = 129,
			[135] = 129,
			[136] = 129,
			[137] = 129,
			[138] = 129,
			[139] = 130,
			[140] = 130,
			[141] = 130,
			[142] = 130,
			[143] = 130,
			[144] = 130,
			[145] = 130,
			[146] = 131,
			[147] = 131,
			[148] = 131,
			[149] = 131,
			[150] = 131,
			[151] = 131,
			[152] = 131,
			[154] = 153,
			[155] = 153,
			[156] = 153,
			[157] = 153,
			[158] = 153,
			[159] = 153,
			[160] = 153,
			[162] = 161,
			[163] = 161,
			[164] = 161,
			[165] = 161,
			[166] = 161,
			[167] = 161,
			[168] = 161,
			[169] = 15,
			[170] = 15,
			[171] = 0,
			[172] = 1,
			[173] = 2,
			[174] = 3,
			[175] = 4,
			[176] = 5,
			[177] = 6,
			[178] = 7,
			[179] = 9,
			[180] = 11,
			[181] = 12,
			[182] = 14,
			[183] = 129,
			[184] = 130,
			[185] = 131,
			[186] = 153,
			[187] = 0,
			[188] = 1,
			[189] = 2,
			[190] = 3,
			[191] = 4,
			[192] = 5,
			[193] = 6,
			[194] = 7,
			[195] = 9,
			[196] = 11,
			[197] = 12,
			[198] = 14,
			[199] = 129,
			[200] = 130,
			[201] = 131,
			[202] = 153,
			[203] = 161,
			[204] = 161,
			[206] = 3,
			[207] = 3,
			[208] = 3,
		}
	}
}