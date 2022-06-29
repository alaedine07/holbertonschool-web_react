import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// test function getFullYear
test("should equal 2022", () => {
    expect(getFullYear()).toBe(2022);
})

// test footercopy function
test('should equal Holberton School if true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

// test latest notifications functions
test('should return <strong>Urgent requirement</strong> - complete by EOD', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');

});