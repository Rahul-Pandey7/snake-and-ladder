import React from "react";

export default class Ui extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }
    print = (e) => {
        for (let i = 1; i <= 100; i++) {
            this.setState({
                value: i
            })
        }
    }
    render() {
        return (
            <div>

                <div id="wrapper" className="m-5 p-5">
                    <div class="square text-center py-2">100</div>
                    <div class="square text-center py-2">99</div>
                    <div class="square text-center py-2">98</div>
                    <div class="square text-center py-2">97</div>
                    <div class="square text-center py-2">96</div>
                    <div class="square text-center py-2">95</div>
                    <div class="square text-center py-2">94</div>
                    <div class="square text-center py-2">93</div>
                    <div class="square text-center py-2">92</div>
                    <div class="square text-center py-2">91</div>
                    <div class="square text-center py-2">81</div>
                    <div class="square text-center py-2">82</div>
                    <div class="square text-center py-2">83</div>
                    <div class="square text-center py-2">84</div>
                    <div class="square text-center py-2">85</div>
                    <div class="square text-center py-2">86</div>
                    <div class="square text-center py-2">87</div>
                    <div class="square text-center py-2">88</div>
                    <div class="square text-center py-2">89</div>
                    <div class="square text-center py-2">90</div>
                    <div class="square text-center py-2">80</div>
                    <div class="square text-center py-2">79</div>
                    <div class="square text-center py-2">78</div>
                    <div class="square text-center py-2">77</div>
                    <div class="square text-center py-2">76</div>
                    <div class="square text-center py-2">75</div>
                    <div class="square text-center py-2">74</div>
                    <div class="square text-center py-2">73</div>
                    <div class="square text-center py-2">72</div>
                    <div class="square text-center py-2">71</div>
                    <div class="square text-center py-2">61</div>
                    <div class="square text-center py-2">62</div>
                    <div class="square text-center py-2">63</div>
                    <div class="square text-center py-2">64</div>
                    <div class="square text-center py-2">65</div>
                    <div class="square text-center py-2">66</div>
                    <div class="square text-center py-2">67</div>
                    <div class="square text-center py-2">68</div>
                    <div class="square text-center py-2">69</div>
                    <div class="square text-center py-2">70</div>
                    <div class="square text-center py-2">60</div>
                    <div class="square text-center py-2">59</div>
                    <div class="square text-center py-2">58</div>
                    <div class="square text-center py-2">57</div>
                    <div class="square text-center py-2">56</div>
                    <div class="square text-center py-2">55</div>
                    <div class="square text-center py-2">54</div>
                    <div class="square text-center py-2">53</div>
                    <div class="square text-center py-2">52</div>
                    <div class="square text-center py-2">51</div>
                    <div class="square text-center py-2">41</div>
                    <div class="square text-center py-2">42</div>
                    <div class="square text-center py-2">43</div>
                    <div class="square text-center py-2">44</div>
                    <div class="square text-center py-2">45</div>
                    <div class="square text-center py-2">46</div>
                    <div class="square text-center py-2">47</div>
                    <div class="square text-center py-2">48</div>
                    <div class="square text-center py-2">49</div>
                    <div class="square text-center py-2">50</div>
                    <div class="square text-center py-2">40</div>
                    <div class="square text-center py-2">39</div>
                    <div class="square text-center py-2">38</div>
                    <div class="square text-center py-2">37</div>
                    <div class="square text-center py-2">36</div>
                    <div class="square text-center py-2">35</div>
                    <div class="square text-center py-2">34</div>
                    <div class="square text-center py-2">33</div>
                    <div class="square text-center py-2">32</div>
                    <div class="square text-center py-2">31</div>
                    <div class="square text-center py-2">21</div>
                    <div class="square text-center py-2">22</div>
                    <div class="square text-center py-2">23</div>
                    <div class="square text-center py-2">24</div>
                    <div class="square text-center py-2">25</div>
                    <div class="square text-center py-2">26</div>
                    <div class="square text-center py-2">27</div>
                    <div class="square text-center py-2">28</div>
                    <div class="square text-center py-2">29</div>
                    <div class="square text-center py-2">30</div>
                    <div class="square text-center py-2">20</div>
                    <div class="square text-center py-2">19</div>
                    <div class="square text-center py-2">18</div>
                    <div class="square text-center py-2">17</div>
                    <div class="square text-center py-2">16</div>
                    <div class="square text-center py-2">15</div>
                    <div class="square text-center py-2">14</div>
                    <div class="square text-center py-2">13</div>
                    <div class="square text-center py-2">12</div>
                    <div class="square text-center py-2">11</div>
                    <div class="square text-center py-2">1</div>
                    <div class="square text-center py-2">2</div>
                    <div class="square text-center py-2">3</div>
                    <div class="square text-center py-2">4</div>
                    <div class="square text-center py-2">5</div>
                    <div class="square text-center py-2">6</div>
                    <div class="square text-center py-2">7</div>
                    <div class="square text-center py-2">8</div>
                    <div class="square text-center py-2">9</div>
                    <div class="square text-center py-2">10</div>
                </div>
            </div>
        )
    }
}