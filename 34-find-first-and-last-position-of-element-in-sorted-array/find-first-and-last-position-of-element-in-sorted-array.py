class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        result = [-1, -1]
        
        result[0] = self.binarySeach(nums, target, True)
        result[1] = self.binarySeach(nums, target, False)
        
        return result
    
    def binarySeach(self, nums, target, isLeftSearching):
        index = -1
        low, high = 0, len(nums) -1
        
        while low <= high:
            mid = low + (high - low)//2
            if nums[mid] == target:
                index = mid
                if isLeftSearching:
                    high = mid - 1
                else:
                    low = mid + 1
            elif nums[mid] > target: 
                high = mid - 1
            else:
                 low = mid + 1
            
        return index
        