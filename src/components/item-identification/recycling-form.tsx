//component for recycling form

export default function RecyclingForm() {
    return (
        <form>
            <h2>Recycling Form</h2>
            <label>
                Item Name:
                <input type="text" name="itemName" />
            </label> <br />
            <label>
                Quantity:
                <input type="number" name="quantity" />
            </label> <br />
            <label>
                Material Type:
                <select name="materialType">
                    <option value="plastic">Plastic</option>
                    <option value="paper">Paper</option>
                    <option value="glass">Glass</option>
                    <option value="metal">Metal</option>
                </select>
            </label>
        </form>
    );
}