# RENERP Documentation

This is the documentation site for RENERP, a modern Enterprise Resource Planning system built with FastAPI and React.

## Getting Started

### Prerequisites

- Node.js 14 or higher
- npm 6 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DankiCalamari/renerp.git
cd renerp/docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The documentation site will be available at http://localhost:3000.

## Building for Production

To build the documentation site for production:

```bash
npm run build
```

The built site will be in the `build` directory.

## Documentation Structure

- `/docs/intro.md` - Introduction to RENERP
- `/docs/installation.md` - Installation guide
- `/docs/development.md` - Development guide
- `/docs/deployment.md` - Deployment guide
- `/docs/troubleshooting.md` - Troubleshooting guide
- `/docs/contributing.md` - Contributing guide

## Writing Documentation

### Adding New Pages

1. Create a new Markdown file in the `/docs` directory
2. Add the page to the sidebar in `sidebars.js`
3. Update the navigation in `docusaurus.config.js`

### Markdown Features

- Code blocks with syntax highlighting
- Tables
- Alerts (info, success, warning, danger)
- Admonitions
- Tabs
- Collapsible sections

Example:

```markdown
:::tip
This is a tip!
:::

:::warning
This is a warning!
:::

:::note
This is a note!
:::

:::caution
This is a caution!
:::

:::info
This is an info block!
:::
```

### Code Blocks

```markdown
```python
def hello_world():
    print("Hello, World!")
```
```

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

### Tabs

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python" default>
    ```python
    def hello():
        print("Hello from Python!")
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    function hello() {
        console.log("Hello from JavaScript!");
    }
    ```
  </TabItem>
</Tabs>
```

## Custom Components

The documentation site includes several custom components:

- `HomepageFeatures` - Feature highlights on the homepage
- `Card` - Card component for displaying information
- `Button` - Custom button styles
- `Alert` - Alert components for different message types

## Styling

The site uses a custom CSS file (`src/css/custom.css`) for styling. The theme colors and other variables can be modified in this file.

## Deployment

The documentation site is deployed to GitHub Pages. To deploy:

1. Build the site:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See the [Contributing Guide](/docs/contributing) for more details.

## License

This documentation is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 